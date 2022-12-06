export const bidForm = () => {
  return `
  <label for="bidInput" class="fw-bold fs-5 mt-3">Place a bid</label>
  <form class="d-flex align-items-center gap-2" id="bidForm">
    <div class="w-100">
      <input
        class="form-control"
        type="number"
        name="amount"
        id="bidInput"
        placeholder="Enter amount"/>
    </div>
    <button class="btn btn-primary text-nowrap" type="submit">Place bid</button>
  </form>
  <div id="errorContainer"></div>`;
};
