function changeImage(imageSrc) {
    document.getElementById('mainImg').src = imageSrc;
}

const itemText = {
    cust: "While other HRMS offerings require you to change your processes to fit their platform, Workline is built around your processes. Have off-roll staff? Have a unique performance management process? We'll help you systemize that on Workline.",
    sec: "Your data is encrypted and sent over HTTPS and stored on a sophisticated, multi-redundancy server system. We backup daily and store your data in multiple locations to ensure your data is completely secure.",
    scal: "Hiring hundreds of off-roll staff? Tied up with a contracting company to manage a division? Workline can be rapidly scaled from a handful of users to hundreds of simultaneous users. Our state of the art infrastructure is constantly updated to ensure it can meet your emerging requirements.",
    real: "No waiting for reports to be emailed to you. No waiting hours for the system to reflect data changes. Workline is a 100% real-time platform. Add users, upload documents, push announcements, manage requests and much more in a real-time environment.",
    bus: "Get instant reports in graphical and tabular formats. Workline's strength lies in a powerful analytical backend that crunches your data to give you instant insight. Set up exactly to your requirements and with no latency, Workline empowers you with real-time insight available within seconds."
};

const itemsContainer = document.querySelector('.items');
const textElement = document.querySelector('.t5');
let previouslyClickedButton = null;

itemsContainer.addEventListener('click', (Event) => {

    if (Event.target.matches('.items button ')) {
        const clickedId = Event.target.id;
        textElement.textContent = itemText[clickedId];

        Event.target.style.backgroundColor = "#364659";
        Event.target.style.color = "white";
        
        if (previouslyClickedButton) {
            previouslyClickedButton.style.backgroundColor = null;
            previouslyClickedButton.style.color = null;
        }
        Event.target.style.backgroundColor = "#364659";
        Event.target.style.color = "white";
        previouslyClickedButton = Event.target;
    }

    if (textElement) {
        const description = itemText[clickedId];
        document.getElementById('t5').textContent = description;
    }
});

