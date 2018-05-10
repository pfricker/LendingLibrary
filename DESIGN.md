# LendingLibrary Design

Like all Angular apps, the LendingLibrary is broken down into discreet components, templates, services, and modules.

There is a component and template for each type of item we make available.  There is also a component and template to handle the upload functionality.  These all sit within the overall App module.  The app module hosts most of the common items and is where the sole Service for the app resides.

The service is where all the methods for actually making the API calls live.  There is definitely some room for clean up in 'app.service.ts' as there are a lot of repeated bits of code.  Additionally, I am very aware that hard coding in an API key is terrible practice.  However, I had to prioritize feature development over code cleanliness as everything about Angular took me A LOT longer than anticipated to complete. 
