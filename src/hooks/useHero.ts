const useHero = () => {
  function cvHandler() {
    const endpoint = process.env.NEXT_PUBLIC_CV_ENDPOINT;
    window.open(endpoint, "_blank");
  }

  function getMailLink() {
    const mail = process.env.NEXT_PUBLIC_MAIL;
    return `mailto:${mail}`;
  }

  return { cvHandler, getMailLink };
};

export default useHero;
