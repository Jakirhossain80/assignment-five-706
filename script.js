// Redirect HTML pages

document.getElementById('board-tab').addEventListener('click', function(){
    window.location.href = 'blogs.html';
});



// Functionality content box, buttons and activity log

        let count = 6;
        let increaseCount = 23;
        let lastClickedButton = null;

        const buttons = document.querySelectorAll(".alertButton");
        const headings = document.querySelectorAll(".heading");
        const decreaseDiv = document.getElementById("decreaseDiv");
        const increaseDiv = document.getElementById("increaseDiv");
        const activityLog = document.getElementById("activityLog");
        const clearLogButton = document.getElementById("clearLog");


        

        buttons.forEach((button, index) => {
            button.addEventListener("click", function() {
                const headingText = headings[index].textContent; 
                alert(`Board updated Successfully`);
                updateLog(`You have Completed The Task ${headingText}`);

                count--;
                increaseCount++;
                decreaseDiv.textContent = count;
                increaseDiv.textContent = increaseCount;

                button.disabled = true;
                button.classList.add("opacity-50", "cursor-not-allowed");
                button.classList.remove("cursor-pointer");

                lastClickedButton = button;

                if (isLastButtonDisabled()) {
                    alert("Congrats!!! You have completed all the current task");
                    // Do NOT log this second alert message
                }
            });
        });

        clearLogButton.addEventListener("click", function() {
            activityLog.innerHTML = ""; // Clears all log entries
        });

        function isLastButtonDisabled() {
            return [...buttons].every(btn => btn.disabled);
        }

        function updateLog(message) {
            const now = new Date();
            let hours = now.getHours();
            let minutes = now.getMinutes();
            let seconds = now.getSeconds();
            const ampm = hours >= 12 ? 'PM' : 'AM';

            hours = hours % 12 || 12;
            minutes = minutes < 10 ? '0' + minutes : minutes;
            seconds = seconds < 10 ? '0' + seconds : seconds;

            const timeString = `${hours}:${minutes}:${seconds} ${ampm}`;
            const logEntry = document.createElement("li");
            logEntry.classList.add('my-2', 'bg-[#f4f7ff]', 'p-2');
            logEntry.textContent = `${message} at ${timeString}`;
            activityLog.prepend(logEntry);
        }
    


        // Dynamic Background color

        const colorBox = document.getElementById("colorBox");
        const changeColorBtn = document.getElementById("changeColorBtn");

       
        const colors = ["red", "blue", "green", "yellow", "purple", "pink"];
        let colorIndex = 0;

        changeColorBtn.addEventListener("click", function() {
            
            colorBox.style.backgroundColor = colors[colorIndex];

           
            colorIndex = (colorIndex + 1) % colors.length;
        });