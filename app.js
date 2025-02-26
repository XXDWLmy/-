document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            // 模拟表单提交
            alert(`姓名: ${name}\n邮箱: ${email}\n留言: ${message}`);

            // 清空表单
            contactForm.reset();
        });
    }
});