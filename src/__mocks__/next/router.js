const router = jest.genMockFromModule("next/router");

const useRouter = () => ({
  route: "/",
  pathname: "",
  query: "",
  asPath: ""
});

router.useRouter = useRouter;

module.exports = router;
