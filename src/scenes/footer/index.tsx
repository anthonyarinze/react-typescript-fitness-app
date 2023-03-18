import Logo from "@/assets/Logo.png";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="bg-primary-100 py-16">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img alt="logo" src={Logo} />
          <p className="my-5">
            Neque adipiscing amet amet enim. Feugiat dolor enim ferrentum in a
            in lectus pellentesque. Ullamcorper et. Neque adipiscing amet amet
            enim. Feugiat dolor enim ferrentum in a in lectus pellentesque.
            Ullamcorper et.
          </p>
          <p>@ Evogym All Rights Reserved.</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Links</h4>
          <p className="my-5">Massa orci senectus</p>
          <p className="my-5">Et gravida id et etiam</p>
          <p>Ullamcorper vivamus</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Contact Us</h4>
          <p className="my-5">Tempus metus mattis risus volutpat egestats.</p>
          <p className="my-5">(555)234-0129</p>
          <p>Ullamcorper vivamus</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
