const mainContent = document.getElementById('main-content')
mainContent.innerHTML = ''

const form = document.createElement('form')
form.innerHTML = `
    <label for="num1">Number 1:</label><br>
    <input type="number" id="num1" name="num1"><br>
    <label for="num2">Number 2:</label><br>
    <input type="number" id="num2" name="num2"><br><br>
    <button type="submit">Add</button><br>
  `
form.addEventListener('submit', (event) => {
    event.preventDefault()
    const num1 = parseFloat(document.getElementById('num1').value)
    const num2 = parseFloat(document.getElementById('num2').value)
    const sum = num1 + num2
    mainContent.innerHTML = `The sum of the two numbers is: ${sum}`
})

mainContent.appendChild(form)