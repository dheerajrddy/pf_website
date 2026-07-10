"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { fadeIn } from "@/lib/animations"

type CompanyLogo = {
  name: string
  src: string
}

const companyLogos: CompanyLogo[] = [
  { name: "Microsoft", src: "/company-logos/microsoft.png" },
  { name: "Oracle", src: "/company-logos/oracle.png" },
  { name: "Uber", src: "/company-logos/uber.png" },
  { name: "Zscaler", src: "/company-logos/zscaler.png" },
  { name: "SUSE", src: "/company-logos/suse.png" },
  { name: "Swiss Re", src: "/company-logos/swiss-re.png" },
  { name: "Schneider Electric", src: "/company-logos/schneider-electric.png" },
  { name: "Truist", src: "/company-logos/truist.png" },
  {
    name: "Samsung Fire & Marine Insurance",
    src: "/company-logos/samsung-fire-marine-insurance.svg",
  },
  { name: "Euronext", src: "/company-logos/euronext.svg" },
  { name: "Altinity", src: "/company-logos/altinity.png" },
  { name: "Alpaca", src: "/company-logos/alpaca.png" },
  { name: "Clear Street", src: "/company-logos/clear-street.png" },
  { name: "EMD Group (Merck KGaA)", src: "/company-logos/merck.png" },
  {
    name: "Oak Ridge National Laboratory",
    src: "/company-logos/oak-ridge-national-laboratory.png",
  },
  { name: "Symplicity", src: "/company-logos/symplicity.png" },
  { name: "V.tal", src: "/company-logos/v-tal.png" },
  { name: "Ministero della Difesa", src: "/company-logos/ministero-della-difesa.png" },
  { name: "Aampe", src: "/company-logos/aampe.png" },
  { name: "Geordie AI", src: "/company-logos/geordie-ai.png" },
  { name: "Netra Runtime", src: "/company-logos/netra-runtime.png" },
  { name: "Predictive Labs", src: "/company-logos/predictive-labs.png" },
  { name: "Rivoluzione Digitale", src: "/company-logos/rivoluzione-digitale.png" },
  { name: "Silicon Interfaces", src: "/company-logos/silicon-interfaces.png" },
  { name: "TechnoVal", src: "/company-logos/technoval.png" },
  { name: "VNO Design", src: "/company-logos/vno-design.png" },
  { name: "Minas Code", src: "/company-logos/minas-code.png" },
  { name: "Simplify (Macrotec)", src: "/company-logos/simplify-macrotec.png" },
  { name: "SMC Global Securities", src: "/company-logos/smc-global-securities.png" },
]

const marqueeLogos = [...companyLogos, ...companyLogos]

function LogoTile({ company, duplicate = false }: { company: CompanyLogo; duplicate?: boolean }) {
  return (
    <div
      aria-hidden={duplicate}
      className="flex h-28 w-44 shrink-0 flex-col items-center justify-center gap-2 rounded-lg border border-gray-200/80 bg-white px-5 py-4 shadow-sm shadow-gray-900/[0.03]"
    >
      <Image
        src={company.src}
        alt={duplicate ? "" : `${company.name} logo`}
        width={220}
        height={64}
        loading="eager"
        className="max-h-9 w-auto max-w-full object-contain opacity-80 saturate-[0.8] transition duration-200 hover:opacity-100 hover:saturate-100"
      />
      <span className="text-center text-xs font-medium text-gray-500">{company.name}</span>
    </div>
  )
}

export function TrustStrip() {
  return (
    <section className="relative border-y border-gray-100 bg-white/70 px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-lg font-extrabold tracking-tight text-gray-900 sm:text-xl">
            Open source trusted by security engineers at
          </h2>

          <div className="logo-marquee-mask mt-8 overflow-hidden">
            <div className="logo-marquee-motion flex w-max gap-4 animate-logo-marquee">
              {marqueeLogos.map((company, index) => (
                <LogoTile
                  key={`${company.name}-${index}`}
                  company={company}
                  duplicate={index >= companyLogos.length}
                />
              ))}
            </div>
            <div className="logo-marquee-static flex-wrap items-center justify-center gap-4">
              {companyLogos.map((company) => (
                <LogoTile key={company.name} company={company} />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
