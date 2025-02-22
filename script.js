const contentData = {
    hostel: "<h3><b>🏠The Hostel</b></h3><p> NIE North College provides well-equipped hostel facilities for students, ensuring a comfortable and secure stay. The hostel offers spacious rooms, hygienic food, and modern amenities to make students feel at home..</p>",
    
    admission: "<h3><b>📝Admission Procedure</b></h3><p>Students seeking hostel accommodation must follow these steps:<br>Fill out the hostel admission form (available online/offline).<br>Submit required documents (ID proof, college admission letter, medical certificate).<br>Pay the hostel fee as per the structure.<br>Receive room allocation details.</p>",
    
    facilities: "<h3><b>Facilities</b></h3><p>Spacious & well-ventilated rooms (2, 3, or 4 sharing options).<br>Wi-Fi connectivity across the hostel.<br>24/7 security & CCTV surveillance.<br>Hygienic mess serving nutritious food.<br>Laundry facilities for students.<br>Common room with TV, indoor games, and study areas.<br>Medical assistance available on call.</p>",
    
    notices: "<h3><b>📢Notice and Circulars</b></h3><p>All hostel-related updates, including room allocation, mess menu changes, and important circulars, are regularly shared on the notice board and student portal.</p>",
    
    fee: "<h3><b>💰Fee Structure</b></h3><p>The hostel fees are structured as follows:<br>2-seater room: ₹85,000 per year<br>3-seater room: ₹75,000 per year<br>4-seater room: ₹65,000 per year<br>Mess charges: ₹40,000 per year (compulsory).</p>",
    
    mess: "<h3><b>🍽️Mess Procedures</b></h3><p>The hostel mess provides healthy and hygienic food, catering to both vegetarian and non-vegetarian students. The menu is decided based on student feedback, ensuring a balanced diet.</p>",
    
    rules: "<h3><b>📜General Rules and Conditions</b></h3><p>Hostel gates close by 10:00 PM.<br>No outsiders/visitors allowed inside rooms.<br>Silence hours are maintained from 10:30 PM to 6:00 AM.<br>Any damage to hostel property will lead to penalties.<br>Ragging and any form of misconduct are strictly prohibited.</p>",
    
    gb: "<h3><b>🏡Girls and Boys Hostel</b></h3><p>The girls' hostel offers separate accommodation with additional security measures, common rooms, and recreational facilities to ensure a safe and comfortable environment.</p>",
};

function showContent(section, event) {
    if (event) event.preventDefault(); // Stop default action

    const contentArea = document.getElementById("content-area");
    if (contentArea) {
        contentArea.innerHTML = contentData[section] || "<h3>Welcome</h3><p>Select an option from the sidebar.</p>";
        contentArea.style.textAlign = "center"; // Centers text
        contentArea.style.display = "flex";
        contentArea.style.flexDirection = "column";
        contentArea.style.alignItems = "center"; // Centers horizontally
        contentArea.style.justifyContent = "center";
    }

    // Prevent scrolling to the top
    window.scrollTo({ top: window.scrollY, behavior: "instant" });
}


