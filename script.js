document.addEventListener('DOMContentLoaded', () => {
  const mobileMenuButton = document.getElementById("mobileMenuButton");
  const mobileMenu = document.getElementById('mobileMenu');

  mobileMenuButton.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
  });

  

  // Simulate real-time updates for hospital info
  function updateHospitalInfo() {
      const emptyBeds = document.getElementById('emptyBeds');
      const activeDoctors = document.getElementById('activeDoctors');

      // Generate random numbers for empty beds and active doctors
      const newEmptyBeds = Math.floor(Math.random() * 50) + 200;
      const newActiveDoctors = Math.floor(Math.random() * 100) + 1450;

      // Update the displayed values
      emptyBeds.textContent = newEmptyBeds;
      activeDoctors.textContent = newActiveDoctors;
  }

  // Update hospital info every 5 seconds
  setInterval(updateHospitalInfo, 5000);

  // Add hover effect to blood types
  const bloodTypes = document.querySelectorAll('.bg-primary.text-white.p-2.rounded.text-center');
  bloodTypes.forEach(type => {
      type.addEventListener('mouseover', () => {
          type.classList.add('transform', 'scale-105', 'transition', 'duration-300');
      });
      type.addEventListener('mouseout', () => {
          type.classList.remove('transform', 'scale-105', 'transition', 'duration-300');
      });
  });
});

