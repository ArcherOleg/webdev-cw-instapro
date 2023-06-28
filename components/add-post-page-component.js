export function renderAddPostPageComponent({ appEl, onAddPostClick }) {
  const render = () => {
    // TODO: Реализовать страницу добавления поста
    const appHtml = `
      <div class="page-container">
        <div class="header-container"></div>
        <div class="form">
                <h3 class="form-title">
                Добавить пост
                </h3>
                <div class="form-inputs">
                <div class="upload-image-container">
                  <label class="file-upload-label secondary-button"> 
                  <input type="file" class="file-upload-input" style="display:none"
                  />
                  <p id="image">Выберите фото</p>
                  </label>
                </div>
                <div>
                Описание фотографии
                <textarea class="input textarea" rows="5" ></textarea>
                </div>
                  <div class="form-error"></div>
                  <button class="button" id="add-button">Добавить</button>
                  </div>
                </div>
      </div>
  `;

    appEl.innerHTML = appHtml;

    document.getElementById("add-button").addEventListener("click", () => {
      const postTextInputEl = document.getElementById('postTextInput').value;
      const photoSelectionEl = document.getElementById('photoSelection');
      if (!photoImageUrl) {
        
        return
      }
      
      onAddPostClick({
        description: "Описание картинки",
        imageUrl: photoImageUrl,

      });
    });
  };

  render();
}
