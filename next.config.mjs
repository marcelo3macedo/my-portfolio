import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

export default withNextIntl({
  basePath: "/my-portfolio",
  output: "export",
});
