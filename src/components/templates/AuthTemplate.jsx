import Navbar from '../organisms/Navbar';

export default function AuthTemplate(props) {
  const { title, subtitle, children } = props;
  return (
    <>
      <div className="min-h-screen md:flex md:flex-col">
        <Navbar />

        <main className="container max-w-[590px] px-6 py-4 m-auto">
          <section>
            <div className="bg-primary-background border border-[#f1f1f1] rounded-sm p-5">
              <div className="text-center mb-5">
                <h3 className="font-poppins font-semibold text-2xl md:text-[32px] mb-2.5 text-dark-primary">{title}</h3>
                <p className="text-dark-secondary">{subtitle}</p>
              </div>
              {children}
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
