import React from "react";
const LOGO_URLS = [
  "https://logowik.com/content/uploads/images/metamask4112.jpg",
  "https://logovectorseek.com/wp-content/uploads/2019/11/bitgo-logo-vector.png",
  "https://logos-world.net/wp-content/uploads/2023/02/Coinbase-Logo.png",
  "https://logowik.com/content/uploads/images/trust-wallet4005.jpg",
  "https://logowik.com/content/uploads/images/exodus5588.logowik.com.webp",
];
function Logo() {
  return (
    <div className="flex items-center justify-center space-x-4 py-8">
      <div className="flex space-x-8 overflow-x-auto">
        {LOGO_URLS.map((url, index) => (
          <img
            key={index}
            src={url}
            alt={`Logo ${index + 1}`}
            className="h-10"
          />
        ))}
      </div>
    </div>
  );
}

export default Logo;
