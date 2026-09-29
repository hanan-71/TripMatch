function findTrip() {

    // Get selected interest
    let interest = document.querySelector(
        'input[name="interest"]:checked'
    );


    // Get selected budget
    let budget = document.querySelector(
        'input[name="budget"]:checked'
    );


    // Get duration
    let duration = document.getElementById("duration").value;


    // Check whether everything is selected

    if (!interest || !budget || duration === "") {

        document.getElementById("result").innerHTML =

            "<div class='result-content'>" +

            "<h2>⚠️ Please complete all options</h2>" +

            "<p>Select your interest, budget and travel duration.</p>" +

            "</div>";

        return;
    }


    let trip;


    // Adventure

    if (interest.value === "adventure") {

        trip = {
            name: "Manali Adventure Escape",
            image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4",
            activities: "Trekking, Camping, River Rafting and Hiking",
            duration: "4 Days / 3 Nights",
            price: "₹12,999"
        };

    }


    // Beach

    else if (interest.value === "beach") {

        trip = {
            name: "Goa Beach Getaway",
            image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2",
            activities: "Beach Visit, Water Sports, Sunset Cruise",
            duration: "3 Days / 2 Nights",
            price: "₹9,999"
        };

    }


    // Culture

    else if (interest.value === "culture") {

        trip = {
            name: "Jaipur Heritage Tour",
            image: "https://images.unsplash.com/photo-1477587458883-47145ed94245",
            activities: "Forts, Palaces, Local Food and Cultural Shows",
            duration: "4 Days / 3 Nights",
            price: "₹10,999"
        };

    }


    // Nature

    else {

        trip = {
            name: "Munnar Nature Escape",
            image: "https://images.unsplash.com/photo-1500534623283-312aade485b7",
            activities: "Tea Gardens, Waterfalls, Trekking and Sightseeing",
            duration: "3 Days / 2 Nights",
            price: "₹8,999"
        };

    }


    // Display result

    document.getElementById("result").innerHTML =

        "<img src='" + trip.image + "'>" +

        "<div class='result-content'>" +

        "<h2>✨ Your Recommended Trip</h2>" +

        "<h3>" + trip.name + "</h3>" +

        "<p><strong>🎯 Activities:</strong> " +
        trip.activities + "</p>" +

        "<p><strong>📅 Duration:</strong> " +
        trip.duration + "</p>" +

        "<p><strong>💰 Starting Price:</strong> " +
        trip.price + "</p>" +

        "<button onclick='bookTrip()'>" +
        "View Package" +
        "</button>" +

        "</div>";
}


function bookTrip() {

    alert(
        "Thank you! Package details will be available soon."
    );

}