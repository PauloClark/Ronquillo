function showInfo(member){
    let name = document.getElementById("name");
    let details = document.getElementById("details");
    let box = document.getElementById("infoBox");

    if(member == "hector"){
        name.innerText = "Hector Ronquillo";
        details.innerText = "Birth Order: 1\nOccupation: Lotto Tipster\nDescription: A lotto tipster is someone skilled in choosing numbers for lottery games or other games of chance, often using intuition, experience, or personal methods to predict lucky numbers.";
    }

    if(member == "joelinda"){
        name.innerText = "Joelinda Jimenez";
        details.innerText = "Birth Order: 2\nOccupation: Housewife\nDescription: A housewife manages household tasks, including cooking, cleaning, budgeting, and supporting the family’s daily needs, ensuring a well-organized and comfortable home environment.";
    }

    if(member == "hermilito"){
        name.innerText = "Hermilito Ronquillo";
        details.innerText = "Birth Order: 3\nOccupation: Police Retired\nDescription: A retired police officer is someone who dedicated their career to law enforcement, maintaining public safety, enforcing laws, and protecting citizens from crime, and now enjoys retirement after years of service.";
    }

    if(member == "jovelyn"){
        name.innerText = "Jovelyn Buslanganon";
        details.innerText = "Birth Order: 4\nOccupation: Med Wife\nDescription: A medical professional’s spouse often supports healthcare services indirectly, assisting in health education, patient care awareness, and community wellness initiatives.";
    }

    if(member == "gina"){
        name.innerText = "Gina Calitas";
        details.innerText = "Birth Order: 5\nOccupation: Agriculturist\nDescription: An agriculturist is a professional expert in the science, technology, and business of agriculture, focusing on improving crop cultivation, soil management, and livestock production.";
    }

    box.style.display = "block";
}

function closeInfo(){
    document.getElementById("infoBox").style.display = "none";
}
