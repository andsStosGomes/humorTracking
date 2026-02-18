# Configuração: Metro Bundler no WSL + Dispositivo Android no Windows

## Problema

Ao executar `npx expo run:android` no WSL (Ubuntu 20.04), o app Android exibe o erro:

> **Unable to load script. Make sure you're running Metro or that your bundle 'index.android.bundle' is packaged correctly for release.**

Isso acontece porque o Metro Bundler roda dentro do WSL, mas o dispositivo Android está conectado ao Windows. O `localhost` do WSL não é acessível diretamente pelo dispositivo.

---

## Solução Passo a Passo

### 1. Descobrir o IP do WSL

No terminal **WSL**, execute:

```bash
hostname -I | awk '{print $1}'
```

> Retorna algo como `172.x.x.x`. Anote esse IP.

---

### 2. Redirecionar a porta 8081 do Windows para o WSL

No **PowerShell (como Administrador)** no Windows, execute:

```powershell
netsh interface portproxy add v4tov4 listenport=8081 listenaddress=0.0.0.0 connectport=8081 connectaddress=<IP_DO_WSL>
```

> Substitua `<IP_DO_WSL>` pelo IP obtido no passo 1.

Para verificar se o redirecionamento foi criado:

```powershell
netsh interface portproxy show v4tov4
```

Para remover o redirecionamento (se necessário):

```powershell
netsh interface portproxy delete v4tov4 listenport=8081 listenaddress=0.0.0.0
```

---

### 3. Liberar a porta 8081 no Firewall do Windows

No **PowerShell (como Administrador)**:

```powershell
netsh advfirewall firewall add rule name="Metro Bundler 8081" dir=in action=allow protocol=TCP localport=8081
```

Para remover a regra (se necessário):

```powershell
netsh advfirewall firewall delete rule name="Metro Bundler 8081"
```

---

### 4. Configurar o ADB Reverse

No **PowerShell/CMD** do Windows (não precisa ser admin):

```powershell
adb reverse tcp:8081 tcp:8081
```

> Isso faz o dispositivo Android redirecionar chamadas à porta 8081 para o Windows, que por sua vez encaminha para o WSL.

---

### 5. Iniciar o Metro no WSL

```bash
npx expo start --port 8081
```

---

### 6. Recarregar o App

No dispositivo Android, toque em **RELOAD** ou pressione **R, R**.

---

## Alternativa: Usar `REACT_NATIVE_PACKAGER_HOSTNAME`

Em vez do port proxy, você pode definir o IP do Windows como hostname do bundler.

### Descobrir o IP do Windows (gateway do WSL):

```bash
cat /etc/resolv.conf | grep nameserver | awk '{print $2}'
```

### Iniciar o Metro com o IP do Windows:

```bash
REACT_NATIVE_PACKAGER_HOSTNAME=<IP_DO_WINDOWS> npx expo start --port 8081
```

> E no Windows, execute `adb reverse tcp:8081 tcp:8081`.

---

## Resumo Rápido

| Etapa              | Onde               | Comando                                                  |
| ------------------ | ------------------ | -------------------------------------------------------- |
| IP do WSL          | WSL                | `hostname -I`                                            |
| Port proxy         | Windows (Admin)    | `netsh interface portproxy add v4tov4 ...`               |
| Firewall           | Windows (Admin)    | `netsh advfirewall firewall add rule ...`                |
| ADB reverse        | Windows            | `adb reverse tcp:8081 tcp:8081`                          |
| Iniciar Metro      | WSL                | `npx expo start --port 8081`                             |

---

## Observações

- O **IP do WSL pode mudar** a cada reinicialização do Windows/WSL. Se isso acontecer, atualize o port proxy com o novo IP.
- Certifique-se de que o **ADB está instalado no Windows** e o dispositivo aparece em `adb devices`.
- Se a porta 8081 estiver ocupada, verifique com `lsof -i :8081` (WSL) ou `netstat -ano | findstr 8081` (Windows).
