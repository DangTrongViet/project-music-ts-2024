const listTextareaMCE = document.querySelectorAll("[textarea-mce]");


if (listTextareaMCE.length > 0) {

    listTextareaMCE.forEach((textarea) => {
        const id = textarea.id;

        tinymce.init({
            // tìm đến thẻ textarea( thêm class textarea-mce để chỉ dùng những phần dùng mce)

            selector: `#${id}`,
            plugins: 'image code ',
            image_title: true,
            images_upload_url:"/admin/upload",
            automatic_uploads: true,
            file_picker_types: "image",
            // Thêm hàm dưới để có thêm nút upload ảnh, thể chỉnh kích cỡ ảnh.
            // file_picker_callback: function (cb, value, meta) {
            //     var input = document.createElement('input');
            //     input.setAttribute('type', 'file');
            //     input.setAttribute('accept', 'image/*');

            //     input.onchange = function () {
            //         var file = this.files[0];

            //         var reader = new FileReader();
            //         reader.onload = function () {

            //             var id = 'blobid' + (new Date()).getTime();
            //             var blobCache = tinymce.activeEditor.editorUpload.blobCache;
            //             var base64 = reader.result.split(',')[1];
            //             var blobInfo = blobCache.create(id, file, base64);
            //             blobCache.add(blobInfo);

            //             cb(blobInfo.blobUri(), { title: file.name });
            //         };
            //         reader.readAsDataURL(file);
            //     };

            //     input.click();
            // }

        });
    });
}