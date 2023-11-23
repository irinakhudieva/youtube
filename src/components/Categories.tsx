import React, { Dispatch, SetStateAction } from 'react';

interface CategoriesProps {
    selectedCategory: string;
    setSelectedCategory:  Dispatch<SetStateAction<string>>
}

const Categories: React.FC<CategoriesProps> = ({selectedCategory, setSelectedCategory}) => {
    const category = ['Новое', 'Музыка', 'Видеоигры', 'Путешествия', 'Кулинария', 'Программирование', 'Фильмы'];

    return (
        <ul className='categories'>
            {category.map(category => 
                <li 
                    key={category} 
                    onClick={() => setSelectedCategory(category)}
                    className={selectedCategory === category? 'item-active' : 'item'}>
                    {category}
                </li>
            )}
        </ul>
    )
}

export default Categories;
