import React from 'react';

const Categories = ({selectedCategory, setSelectedCategory}) => {
    const category = ['Новое', 'Музыка', 'Видеоигры', 'Путешествия', 'Кулинария', 'Программирование', 'Фильмы'];

    return (
        <div className='categories'>
            {category.map(category => 
                <button 
                    key={category} 
                    onClick={() => setSelectedCategory(category)}
                    className={selectedCategory === category? 'item-active' : 'item'}>
                    {category}
                </button>
            )}
        </div>
    )
}

export default Categories;
