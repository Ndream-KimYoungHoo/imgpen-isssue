## Setup Step
1. Clone the repo
2. `yarn install` in the root and `yarn install` and `yarn build` in CKEDitor folder
3. `yarn start` in the root 

## Issue Scenario (GIF)
<img src="https://github.com/Ndream-KimYoungHoo/imgpen-isssue/assets/107921227/35acb1cd-e2e1-4e69-97c1-1f2b9d774517" width= "480px" height= "400px" />

## Description of the Issue
1. Click toggle editor button
2. Upload some images
3. Edit Image and Save
4. Click toggle editor button again to hide editor
5. Click toggle editor button again to show editor
6. Edit again image and try Save
7. (❌ Problem here) There is an issue where the edited results are not being reflected

The mentioned steps abstract the UX of projects utilizing actual imgpen and ckeditor. Similarly, the code written in this repository also abstracts the code of the projects it is used for.

## Desired Outcome
The edited image from step 7 should be reflected.

## Suspicious Points

I am suspicious of the following imgpen.js code received through the network.

![image](https://github.com/Ndream-KimYoungHoo/imgpen-isssue/assets/107921227/1c23f50f-3f29-4be7-bbca-bfda28f73d69)

The basis for this suspicion lies in the difference between the following two scenarios.

### First Scenario
<img src="https://github.com/Ndream-KimYoungHoo/imgpen-isssue/assets/107921227/e5e40931-1e85-4fcc-994d-6ed9cc5d3fb2" width="480px" height="400px"/>

1. Click toggle editor button
2. Upload some images
3. Edit Image and **Cancle**
(don't save the edited results here. However, since the image editor needs to be displayed on the screen, it can be inferred that the internal code of imgpen.js has been executed)
4. Click toggle editor button again to hide editor
5. Click toggle editor button again to show editor
6. Edit again image and Save
7. (❌ Problem here) There is an issue where the edited results are not being reflected

🤔 Just to note, the issue persists even after applying the 'imgpen' key following payment

### Second Scenario
<img src="https://github.com/Ndream-KimYoungHoo/imgpen-isssue/assets/107921227/5e637dd5-840b-44ef-93a9-8772ff157068" width="480px" height="400px"/>

1. Click toggle editor button
2. Upload some images
3. Click toggle editor button again to hide editor
(In contrast to the previous situation, as no attempt was made to edit the image, the code of imgpen.js is not executed)
5. Click toggle editor button again to show editor
6. Edit Image and Save
7. It can be confirmed that the edited results are reflected correctly

When considering the two previous scenarios together, it is suspected that the root cause of the issue lies within imgpen.js

## Environment Details
- Window 11 Pro
- Chrome 

## Additional Notes
I have made some modifications to the internal code of imgpencommand.js within the @edsdk/flmngr-ckeditor5 package located in the CKEditor folder. 
The reason for these modifications is as follows:
![image](https://github.com/Ndream-KimYoungHoo/imgpen-isssue/assets/107921227/13df3fa8-1470-48ef-b87a-256fd6eb2e18)

You can also find the modified content in the TXT file located in the patches folder within the CKEditor directory
