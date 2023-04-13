const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event - Done
window.addEventListener('beforeinstallprompt', (event) => {
        // Store the triggered events
        window.deferredPrompt = event;

        // Remove the hidden class from the button.
        butInstall.classList.toggle('hidden', false);    
});

// TODO: Implement a click event handler on the `butInstall` element - Done
butInstall.addEventListener('click', async () => {
    const promptEvent = window.deferredPrompt;

    if (!promptEvent) {
     return;
    }
  
    // Show prompt
    promptEvent.prompt();
    
    // Reset the deferred prompt variable, it can only be used once.
    window.deferredPrompt = null;
    
    butInstall.classList.toggle('hidden', true);
  });

// TODO: Add an handler for the `appinstalled` event - Done
window.addEventListener('appinstalled', (event) => {
  // Clear prompt
  window.deferredPrompt = null;
});
