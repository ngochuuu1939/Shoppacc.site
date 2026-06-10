// Dữ liệu các tài khoản Free Fire - Hãy thay đổi theo acc của bạn
const products = [
    { name: "★ Fb:chocopie★", rank: "Huyền Thoại", prime5, image: "🎮", skin: "đủ đồ" },
function renderProducts() {
    const container = document.getElementById('productList');
    if (!container) return;
    container.innerHTML = '';
    products.forEach((p, idx) => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <div class="product-img">${p.image} ${p.name.slice(0,2)}</div>
            <div class="product-info">
                <div class="product-title">${p.name}</div>
                <div class="product-rank">🏆 ${p.rank}</div>
                <div class="product-price">💰 ${p.price.toLocaleString('vi-VN')}đ</div>
                <div class="product-skin">🎁 Skin: ${p.skin}</div>
                <button class="buy-btn" data-name="${p.name}" data-price="${p.price}">🛒 Mua ngay</button>
            </div>
        `;
        container.appendChild(card);
    });
    document.querySelectorAll('.buy-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const name = btn.getAttribute('data-name');
            const price = btn.getAttribute('data-price');
            alert(`✅ Bạn đã chọn mua acc: ${name}\n💰 Giá: ${Number(price).toLocaleString('vi-VN')}đ\n📲 Liên hệ Zalo: 0397450274 để thanh toán.`);
        });
    });
}

renderProducts();
