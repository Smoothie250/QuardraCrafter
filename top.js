// GSAPを利用してスクロール時にアニメーションを追加する例
gsap.from(".hero-title", { duration: 1, y: -50, opacity: 0 });
gsap.from(".hero-subtitle", { duration: 1, y: 50, opacity: 0, delay: 0.5 });
gsap.from(".cta-button", { duration: 1, scale: 0.8, opacity: 0, delay: 1 });
