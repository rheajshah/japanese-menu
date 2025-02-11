import React from 'react';
import './MenuItem.css';


// This is a functional component that represents a single menu item. It currently takes in the title and displays it in an h2 element.
// Modify the component to take in all the other properties of a menu item you need and display them in the component.
// Use bootstrap to style the elements so that it looks like the mockup in the assignment.
// Hint: You can use the image name to get the image from the images folder.
const MenuItem = ({title , description, img_name, price}) => {
    return (
        <div class = "row menu-grid-row menu-item-content">
            <div class = "col-4">
                <img class = "img-fill-container rounded-3" src={"./images/" + img_name} alt = {title}/>
            </div>
            <div class = "col-8">
                <h4 class = "menu-item">{title}</h4>
                <p class = "menu-item-description menu-item-desc-margin-bottom">{description}</p>
                <div class = "row">
                    <div class = "col">
                        <p><b>${price}</b></p>
                    </div>
                    <div class = "col btn btn-right-align">
                        <button class = "btn-bg rounded-circle">Add</button>
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default MenuItem;
