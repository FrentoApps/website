import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#111] flex max-w-full md:max-w-[70%] sm:max-w-[80%] p-2 md:p-6 sm:p-3 justify-self-center border border-neutral-800">
      {" "}
      <main className="flex-1 p-8 lg:py-16 max-w-3xl mx-auto">
        <div className="space-y-8">
          <h1
            className={`${GeistSans.className} font-semibold text-4xl md:text-5xl tracking-tight`}
          >
            Frento Apps are here! ✨
          </h1>
          <div
            className={`${GeistMono.className} text-gray-300 space-y-6 text-lg leading-relaxed`}
          >
            <p>
              We're thrilled to announce <strong>Frento Apps</strong>, an
              innovative agency comprised of forward-thinking developers
              dedicated to revolutionizing the landscape of web applications
              worldwide. Our mission is to craft{" "}
              <em>unique, impactful web solutions</em> that drive meaningful
              change across industries.
            </p>
            <div>
              At Frento Apps, we're committed to:
              <ul className="mt-2 space-y-1">
                <li>• Pushing the boundaries of web technology</li>
                <li>• Creating intuitive and engaging user experiences</li>
                <li>• Developing scalable and efficient applications</li>
              </ul>
            </div>
            <p>
              Join us on this exciting journey as we shape the future of web
              development.{" "}
              <u>
                Your vision, our expertise – together, we'll make waves in the
                digital realm.
              </u>
            </p>
            <p>
              Ready to bring your ideas to life? Contact us at{" "}
              <a
                href="mailto:hello@frento.us.to"
                className="underline hover:text-white transition-colors"
              >
                hello@frento.us.to
              </a>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
