export const fetchMessage = (errorMessage) => {
  return `<div class="container d-flex align-items-center justify-content-center mt-2 py-2 rounded" id="fetchError">
            <div class="row d-flex align-items-center justify-content-center">
              <p class="fw-bold text-center m-0"><i class="fa-solid fa-triangle-exclamation"></i> ${errorMessage}</p>
            </div>
          </div>`;
};
