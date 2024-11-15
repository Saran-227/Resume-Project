document.getElementById('resumeForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Fetching values from form
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const contact = document.getElementById('contact').value;
    const about = document.getElementById('about').value;
    const company = document.getElementById('company').value;
    const jobTitle = document.getElementById('jobTitle').value;
    const jobDuration = document.getElementById('jobDuration').value;
    const achievements = document.getElementById('achievements').value;
    const college = document.getElementById('college').value;
    const degree = document.getElementById('degree').value;

    // Generate PDF using jsPDF
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    // Adding content to the PDF
    doc.setFontSize(18);
    doc.text(`${name}'s Resume`, 10, 20);
    
    doc.setFontSize(12);
    doc.text(`Email: ${email}`, 10, 30);
    doc.text(`Contact: ${contact}`, 10, 40);
    doc.text(`About: ${about}`, 10, 50);

    doc.text('Work Experience', 10, 70);
    doc.text(`Company: ${company}`, 10, 80);
    doc.text(`Job Title: ${jobTitle}`, 10, 90);
    doc.text(`Duration: ${jobDuration}`, 10, 100);

    doc.text('Achievements', 10, 120);
    doc.text(achievements, 10, 130);

    doc.text('Education', 10, 150);
    doc.text(`College: ${college}`, 10, 160);
    doc.text(`Degree: ${degree}`, 10, 170);

    // Save the PDF
    doc.save(`${name}_Resume.pdf`);
});
