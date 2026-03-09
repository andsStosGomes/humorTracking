import React from 'react';
import { TouchableOpacity, View } from 'react-native';

import { FontAwesome } from '@expo/vector-icons';

// import { Container } from './styles';

type StarRatingProps = {
    value: number;
    onchange: (rate: number) => void;
    totalStars?: number;
    size?: number;
    activeColor?: string;
    inactiveColor?: string;
}


export const StarRating: React.FC<StarRatingProps> = ({ value, onchange, totalStars = 5, size = 36, activeColor, inactiveColor }) => {
    return (
        <>
            {Array.from({ length: totalStars }).map((_, index) => {
                const isActive = index < value;
                return (
                    <TouchableOpacity
                        key={index}
                        onPress={() => onchange(index + 1)}
                    >
                        <FontAwesome
                            name={isActive ? "star" : "star-o"}
                            size={size}
                            color={isActive ? activeColor : inactiveColor}
                        />
                    </TouchableOpacity>
                );
            })}
        </>
    );
}

