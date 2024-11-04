// Upload Image
document.addEventListener("DOMContentLoaded", () => {
    const uploadImage = document.querySelector("[upload-image]");
    if (uploadImage) {
        const uploadImageInput = document.querySelector("[upload-image-input]");
        const uploadImagePreview = document.querySelector("[upload-image-preview]");

        uploadImageInput.addEventListener("change", (e) => {
            const file = e.target.files[0];
            if (file) {
                uploadImagePreview.src = URL.createObjectURL(file);
                const btnClose = document.querySelector("[btn-close]");
                btnClose.style.display = "block";
                uploadImagePreview.style.display = "block";
                btnClose.addEventListener("click", () => {
                    uploadImageInput.value = "";
                    uploadImagePreview.style.display = "none";
                    btnClose.style.display = "none";
                });
            }
        });
    }
})
// End Upload Image


// Upload Audio
document.addEventListener("DOMContentLoaded", () => {
    const uploadAudio = document.querySelector("[upload-audio]");
    if (uploadAudio) {
        const uploadAudioInput = uploadAudio.querySelector("[upload-audio-input]");
        const uploadAudioPlay = uploadAudio.querySelector("[upload-audio-play]");
        const source = uploadAudio.querySelector("source");

        uploadAudioInput.addEventListener("change", (e) => {
            const files = e.target.files.length;
            if (files) {
                
                const audio = URL.createObjectURL(e.target.files[0]);

                
                source.src= audio;
                uploadAudioPlay.load();
            }
        })
}
});


// End Upload audio