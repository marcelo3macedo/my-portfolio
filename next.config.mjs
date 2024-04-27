import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

export default withNextIntl({
  trailingSlash: true,
  distDir: "out",
  output: "export",
  basePath: "/my-portfolio",
});
