document.addEventListener("DOMContentLoaded", () => {
    const x = parseInt(prompt("Enter the height of the tree -->:"), 10);
    const body = document.body;
        function createRow(content) {
        const row = document.createElement("div");
        row.className = "tree-row";
        row.innerHTML = content;
        body.appendChild(row);
    }
    createRow("*");

    for (let i = 0; i < x; i++) {
        const spaces = " ".repeat(x - i - 1); 
        const borderStars = `<span class="borderrr">*</span>`; 
        const innerSymbols = `<span class="innerrr">|</span>`.repeat(7* i + 1); 
        const rowContent = spaces + borderStars + innerSymbols + borderStars;
        createRow(rowContent);
    }

    setInterval(() => {
        document.querySelectorAll(".border").forEach(border => { //here im changing the color of the stars every one seond
            border.style.color = border.style.color === "green" ? "red" : "green";
        });
    }, 1000);
});

