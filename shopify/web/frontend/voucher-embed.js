(function () {
  document.addEventListener("DOMContentLoaded", () => {

    // Shopify Order Status Page object
    if (!window.ShopifyCheckout) return;

    const orderId = ShopifyCheckout.order.id;
    const customerName =
      ShopifyCheckout.order.billing_address.first_name +
      " " +
      ShopifyCheckout.order.billing_address.last_name;

    const btn = document.createElement("button");
    btn.innerText = "Download Voucher PDF";
    btn.style.cssText =
      "padding:10px 20px;background:#000;color:#fff;border:none;margin-top:20px;";

    btn.onclick = () => {
      const url = `/apps/voucher?order_id=${orderId}&customer=${encodeURIComponent(
        customerName
      )}`;
      window.location.href = url;
    };

    document.querySelector(".os-order-confirmation").appendChild(btn);
  });
})();
