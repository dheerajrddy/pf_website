"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { fadeIn } from "@/lib/animations"

type CompanyLogo = {
  name: string
  src: string
  widthClass?: string
}

const companyLogos: CompanyLogo[] = [
  { name: "Microsoft", src: "/company-logos/microsoft.svg", widthClass: "w-44" },
  { name: "Oracle", src: "/company-logos/oracle.svg", widthClass: "w-36" },
  { name: "Uber", src: "/company-logos/uber.svg", widthClass: "w-32" },
  { name: "Zscaler", src: "/company-logos/zscaler.svg", widthClass: "w-40" },
  { name: "SUSE", src: "/company-logos/suse.svg", widthClass: "w-32" },
  { name: "Swiss Re", src: "/company-logos/swiss-re.svg", widthClass: "w-40" },
  { name: "Schneider Electric", src: "/company-logos/schneider-electric.svg", widthClass: "w-48" },
  { name: "Truist", src: "/company-logos/truist.svg", widthClass: "w-36" },
  {
    name: "Samsung Fire & Marine Insurance",
    src: "/company-logos/samsung-fire-marine-insurance.svg",
    widthClass: "w-56",
  },
  { name: "Euronext", src: "/company-logos/euronext.svg", widthClass: "w-40" },
  { name: "Altinity", src: "/company-logos/altinity.svg", widthClass: "w-40" },
  { name: "Alpaca", src: "/company-logos/alpaca.svg", widthClass: "w-36" },
  { name: "Clear Street", src: "/company-logos/clear-street.svg", widthClass: "w-44" },
  { name: "EMD Group (Merck KGaA)", src: "/company-logos/merck.svg", widthClass: "w-36" },
  {
    name: "Oak Ridge National Laboratory",
    src: "/company-logos/oak-ridge-national-laboratory.svg",
    widthClass: "w-64",
  },
  { name: "Symplicity", src: "/company-logos/symplicity.svg", widthClass: "w-44" },
  { name: "V.tal", src: "/company-logos/v-tal.svg", widthClass: "w-32" },
  { name: "Ministero della Difesa", src: "/company-logos/ministero-della-difesa.svg", widthClass: "w-56" },
  { name: "Aampe", src: "/company-logos/aampe.svg", widthClass: "w-36" },
  { name: "Geordie AI", src: "/company-logos/geordie-ai.svg", widthClass: "w-40" },
  { name: "Netra Runtime", src: "/company-logos/netra-runtime.svg", widthClass: "w-48" },
  { name: "Predictive Labs", src: "/company-logos/predictive-labs.svg", widthClass: "w-48" },
  { name: "Rivoluzione Digitale", src: "/company-logos/rivoluzione-digitale.svg", widthClass: "w-56" },
  { name: "Silicon Interfaces", src: "/company-logos/silicon-interfaces.svg", widthClass: "w-52" },
  { name: "TechnoVal", src: "/company-logos/technoval.svg", widthClass: "w-40" },
  { name: "VNO Design", src: "/company-logos/vno-design.svg", widthClass: "w-44" },
  { name: "Minas Code", src: "/company-logos/minas-code.svg", widthClass: "w-44" },
  { name: "Simplify (Macrotec)", src: "/company-logos/simplify-macrotec.svg", widthClass: "w-44" },
  { name: "SMC Global Securities", src: "/company-logos/smc-global-securities.svg", widthClass: "w-56" },
]

const marqueeLogos = [...companyLogos, ...companyLogos]

function LogoTile({ company, duplicate = false }: { company: CompanyLogo; duplicate?: boolean }) {
  return (
    <div
      aria-hidden={duplicate}
      className={`flex h-20 shrink-0 items-center justify-center rounded-lg border border-gray-200/80 bg-white px-5 shadow-sm shadow-gray-900/[0.03] ${company.widthClass ?? "w-44"}`}
    >
      <Image
        src={company.src}
        alt={duplicate ? "" : `${company.name} logo`}
        width={220}
        height={64}
        loading="eager"
        className="max-h-11 w-auto max-w-full object-contain opacity-80 saturate-[0.8] transition duration-200 hover:opacity-100 hover:saturate-100"
      />
    </div>
  )
}

export function TrustStrip() {
  return (
    <section className="relative border-y border-gray-100 bg-white/70 px-4 py-12 sm:px-6 lg:px-8">
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
            Trusted by engineers at companies like...
          </h2>
          <p className="mt-2 text-sm font-medium text-gray-600">
            30 verified organizations among{" "}
            <span className="font-mono text-xs font-semibold text-gray-900">agent-security-scanner-mcp</span>
            &apos;s GitHub stargazers.
          </p>

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
