export const bidForm = () => {
  return `
  <form class="d-flex align-items-center gap-2" id="bidForm">
    <div class="w-100">
      <input
        class="form-control"
        type="number"
        name="amount"
        id="bidInput"
        aria-label="Place a bid"
        placeholder="Enter amount"/>
    </div>
    <button class="btn btn-primary text-nowrap" type="submit">Place bid</button>
  </form>`;
};
