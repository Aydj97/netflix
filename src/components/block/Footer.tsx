import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className=" w-full min-h-47 bg-[#000000] text-white font-sans pt-6 ">
      <div className="w-[90%] flex justify-center items-center flex-col gap-17 lg:pl-17">
        <div className=" w-[90%] flex flex-col gap-12  ">
          <h4 className=" border-b w-41 ">Questions? Contact us.</h4>

          <ul className=" grid lg:grid-cols-4 lg:gap-8 gap-3   ">
            <li className=" border-b w-8 ">
              <NavLink to="/">FAQ</NavLink>
            </li>
            <li className=" border-b w-22">
              <NavLink to="/">Help Center</NavLink>
            </li>
            <li className=" border-b w-14  ">
              <NavLink to="/">Account</NavLink>
            </li>

            <li className=" border-b w-24 ">
              <NavLink to="/">Media Center</NavLink>
            </li>

            <li className=" border-b w-32 ">
              <NavLink to="/">Investor Relations</NavLink>
            </li>

            <li className=" border-b w-8 ">
              <NavLink to="/">Jobs</NavLink>
            </li>

            <li className=" border-b w-27">
              <NavLink to="/">Ways to Watch</NavLink>
            </li>

            <li className=" border-b w-23 ">
              <NavLink to="/">Terms of Use</NavLink>
            </li>

            <li className=" border-b w-12 ">
              <NavLink to="/">Privacy</NavLink>
            </li>

            <li className=" border-b w-34 ">
              <NavLink to="/">Cookie Preferences</NavLink>
            </li>

            <li className=" border-b w-40 ">
              <NavLink to="/">Corporate Information</NavLink>
            </li>

            <li className=" border-b w-20">
              <NavLink to="/">Contact Us</NavLink>
            </li>

            <li className=" border-b w-19 ">
              <NavLink to="/">Speed Test</NavLink>
            </li>

            <li className=" border-b w-24 ">
              <NavLink to="/">Legal Notices</NavLink>
            </li>

            <li className=" border-b w-27">
              <NavLink to="/">Only on Netflix</NavLink>
            </li>
          </ul>
        </div>
        <div className="flex  flex-col gap-7 w-[90%] font-sans mb-29 ">
          <NavLink to="/" className="border-2 rounded-[5px] lg:w-[12%] w-[42%] md:w-[20%] h-10 pt-2">
          <button className=" flex gap-2 items-center  " > 
            <svg viewBox="0 0 16 16" width="16" height="16" data-icon="LanguagesSmall" data-icon-id=":Rhimld9qlbanb96:" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" role="img"><path fill="currentColor" fill-rule="evenodd" d="M10.77 5.33 10.5 6 9.34 8.94l-.57 1.44L7.33 14h1.78l.73-1.97h3.58l.74 1.97H16l-3.43-8.67zm-.15 4.6-.24.63h2.51l-1.26-3.35zm-1.1-5.09.1-.19h-3.2V2h-1.5v2.65H.55V6h3.77A11 11 0 0 1 0 10.43c.33.28.81.8 1.05 1.16 1.5-.91 2.85-2.36 3.88-4.02v5.1h1.49V7.52q.6.95 1.33 1.8l.57-1.43a12 12 0 0 1-1.34-1.9h2.09z" clip-rule="evenodd"></path></svg>

           <select id=":R59qlbanb96:" name="LanguageSelect" data-uia="language-picker" data-wct-form-control-element="true" className=" w-20 items-center text-white bg-black"><option lang="en" label="English" value="en-NG" >English</option><option lang="es" label="Español" value="es-NG">Español</option><option lang="pt" label="Português" value="pt-NG">Português</option><option lang="fr" label="Français" value="fr-NG">Français</option><option lang="sv" label="Svenska" value="sv-NG">Svenska</option><option lang="nb" label="Norsk bokmål" value="nb-NG">Norsk bokmål</option><option lang="fi" label="Suomi" value="fi-NG">Suomi</option><option lang="da" label="Dansk" value="da-NG">Dansk</option><option lang="nl" label="Nederlands" value="nl-NG">Nederlands</option><option lang="de" label="Deutsch" value="de-NG">Deutsch</option><option lang="ja" label="日本語" value="ja-NG">日本語</option><option lang="it" label="Italiano" value="it-NG">Italiano</option><option lang="zh" label="中文" value="zh-NG">中文</option><option lang="ko" label="한국어" value="ko-NG">한국어</option><option lang="ar" label="العربية" value="ar-NG">العربية</option><option lang="pl" label="Polski" value="pl-NG">Polski</option><option lang="tr" label="Türkçe" value="tr-NG">Türkçe</option><option lang="th" label="ไทย" value="th-NG">ไทย</option><option lang="ro" label="Română" value="ro-NG">Română</option><option lang="he" label="עברית" value="he-NG">עברית</option><option lang="el" label="Ελληνικά" value="el-NG">Ελληνικά</option><option lang="id" label="Bahasa Indonesia" value="id-NG">Bahasa Indonesia</option><option lang="hu" label="Magyar" value="hu-NG">Magyar</option><option lang="cs" label="Čeština" value="cs-NG">Čeština</option><option lang="vi" label="Tiếng Việt" value="vi-NG">Tiếng Việt</option><option lang="hi" label="हिन्दी" value="hi-NG">हिन्दी</option><option lang="ms" label="Melayu" value="ms-NG">Melayu</option><option lang="ru" label="Русский" value="ru-NG">Русский</option><option lang="hr" label="Hrvatski" value="hr-NG">Hrvatski</option><option lang="uk" label="Українська" value="uk-NG">Українська</option><option lang="fil" label="Filipino" value="fil-NG">Filipino</option></select>

          
          
          </button>
          </NavLink>
          <p>Netflix Nigeria</p>
          <span className="text-[#ffffff80]">This page is protected by Google reCAPTCHA to ensure you're not a bot.</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
