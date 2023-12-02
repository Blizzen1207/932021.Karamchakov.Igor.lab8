document.addEventListener('DOMContentLoaded', Create_NewElement);
let elements = [];
function Create_NewElement() 
{
    const container = document.querySelector('.Container_Element');
    const newElement = document.createElement('div');
    newElement.className = 'element';
    newElement.innerHTML = `
                <label>
                    <input type="text">
                </label>
                <label>
                    <input type="number">
                </label>
                <button onclick="Up_Element(this.parentNode)" value="up">↑</button>
                <button onclick="Down_Element(this.parentNode)" value="down">↓</button>
                <button onclick="Delete_Element(this.parentNode)" value="delete">x</button>
            `;
    container.appendChild(newElement);
}
function Print_Results() 
{
    const result = {};
    document.querySelectorAll('.element').forEach((element) => 
    {
        const label = element.querySelector('input[type="text"]').value;
        const number = element.querySelector('input[type="number"]').value;
        result[`${label}`] = `${number}`;
    });

    const resultOutput = document.querySelector('.Result_Output');
    resultOutput.textContent = JSON.stringify(result);
}
function Up_Element(element) 
{
    const previousElement = element.previousElementSibling;
    if (previousElement) 
    {
        element.parentNode.insertBefore(element, previousElement);
        Update_Element();
    }
}
function Down_Element(element) 
{
    const nextElement = element.nextElementSibling;
    if (nextElement) 
    {
        element.parentNode.insertBefore(nextElement, element);
        Update_Element();
    }
}
function Delete_Element(element) 
{
    element.parentNode.removeChild(element);
}

function Update_Element() 
{
    elements = [];
    document.querySelectorAll('.element').forEach(element => 
        {
        const label = element.querySelector('input[type="text"]').value;
        const number = element.querySelector('input[type="number"]').value;
        elements.push({ label, number });
    })
}
