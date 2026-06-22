/** Inline script to apply saved theme before paint (prevents flash). */
export function ThemeScript() {
  const script = `(function(){try{var t=localStorage.getItem("deluxe-theme");if(t==="light"||t==="dark"){document.documentElement.setAttribute("data-theme",t);document.documentElement.style.colorScheme=t;}}catch(e){}})();`;

  return (
    <script
      dangerouslySetInnerHTML={{ __html: script }}
      suppressHydrationWarning
    />
  );
}
