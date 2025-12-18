 let passengers = 0;
      let cars = 1;
      let isPassengersOpen = false;

      // Toggle passengers section
      document
        .getElementById("passengersToggle")
        .addEventListener("click", function () {
          isPassengersOpen = !isPassengersOpen;
          const section = document.getElementById("passengersSection");
          const icon = document.getElementById("dropdownIcon");
          const toggle = document.getElementById("passengersToggle");

          if (isPassengersOpen) {
            section.classList.add("active");
            icon.classList.add("active");
            toggle.classList.add("active");
          } else {
            section.classList.remove("active");
            icon.classList.remove("active");
            toggle.classList.remove("active");
          }
        });

      function updatePassengersInput() {
        const input = document.getElementById("passengersInput");
        if (passengers === 0 && cars === 1) {
          input.value = "";
          input.placeholder = "الركاب";
        } else {
          input.value = `${passengers} ركاب، ${cars} سيارة`;
        }
      }

      function incrementPassengers() {
        passengers++;
        document.getElementById("passengersCount").textContent = passengers;
        updatePassengersInput();
      }

      function decrementPassengers() {
        if (passengers > 0) {
          passengers--;
          document.getElementById("passengersCount").textContent = passengers;
          updatePassengersInput();
        }
      }

      function incrementCars() {
        cars++;
        document.getElementById("carsCount").textContent = cars;
        updatePassengersInput();
      }

      function decrementCars() {
        if (cars > 1) {
          cars--;
          document.getElementById("carsCount").textContent = cars;
          updatePassengersInput();
        }
      }

      // Set default date to today
      const today = new Date().toISOString().split("T")[0];
      document.getElementById("departureDate").value = today;

      // Book button functionality
      document
        .querySelector(".book-button")
        .addEventListener("click", function () {
          const departure = document.getElementById("departure").value;
          const arrival = document.getElementById("arrival").value;
          const date = document.getElementById("departureDate").value;
          const time = document.getElementById("departureTime").value;
          const tripType = document.querySelector(
            'input[name="tripType"]:checked'
          ).value;

          if (!departure || !arrival) {
            alert("الرجاء إدخال موقع الانطلاق والوصول");
            return;
          }

          const tripTypeText =
            tripType === "one-way" ? "ذهاب فقط" : "ذهاب وعودة";
          alert(
            `تم الحجز!\nالنوع: ${tripTypeText}\nمن: ${departure}\nإلى: ${arrival}\nالتاريخ: ${date}\nالوقت: ${time}\nالركاب: ${passengers}\nالسيارات: ${cars}`
          );
        });

      // Tab switching functionality
      document.querySelectorAll(".tab").forEach((tab) => {
        tab.addEventListener("click", function () {
          document
            .querySelectorAll(".tab")
            .forEach((t) => t.classList.remove("active"));
          this.classList.add("active");
        });
      });

      // DATA
     
      const dateInput = document.getElementById("departureDate");
      const dateText = document.getElementById("dateText");

      dateInput.addEventListener("change" ,() =>{

       if (dateInput.value) {
      const date = new Date(dateInput.value);
      dateText.textContent = date.toLocaleDateString("ar-EG", {
        year: "numeric",
        month: "long",
        day: "numeric"
      });
    }
      });

      const box = document.getElementById("dateBox");
 
  box.addEventListener("click", () => {
    
    dateInput.showPicker(); 
  });
    
    const timeBox = document.getElementById("timeBox");
    const timeInput = document.getElementById("departureTime");

  timeBox.addEventListener("click", () => {
    if (timeInput.showPicker) {
      timeInput.showPicker();
    } else {
      timeInput.focus();
      timeInput.click();
    }
  });