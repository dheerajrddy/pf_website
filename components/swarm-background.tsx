import type { CSSProperties } from "react"

const particles = [
  { left: "7%", top: "16%", color: "blue", drift: "a", speed: "9s", delay: "-2s" },
  { left: "18%", top: "38%", color: "blue", drift: "b", speed: "12s", delay: "-7s" },
  { left: "31%", top: "12%", color: "red", drift: "c", speed: "10s", delay: "-4s" },
  { left: "42%", top: "29%", color: "blue", drift: "a", speed: "13s", delay: "-9s" },
  { left: "55%", top: "17%", color: "blue", drift: "c", speed: "11s", delay: "-5s" },
  { left: "69%", top: "35%", color: "red", drift: "b", speed: "8s", delay: "-1s" },
  { left: "82%", top: "13%", color: "blue", drift: "a", speed: "12s", delay: "-6s" },
  { left: "93%", top: "41%", color: "blue", drift: "c", speed: "10s", delay: "-3s" },
  { left: "11%", top: "67%", color: "red", drift: "b", speed: "11s", delay: "-8s" },
  { left: "24%", top: "81%", color: "blue", drift: "c", speed: "13s", delay: "-4s" },
  { left: "38%", top: "59%", color: "blue", drift: "a", speed: "9s", delay: "-6s" },
  { left: "49%", top: "76%", color: "red", drift: "c", speed: "12s", delay: "-10s" },
  { left: "63%", top: "62%", color: "blue", drift: "b", speed: "10s", delay: "-3s" },
  { left: "75%", top: "83%", color: "blue", drift: "a", speed: "14s", delay: "-7s" },
  { left: "88%", top: "69%", color: "red", drift: "b", speed: "9s", delay: "-5s" },
  { left: "96%", top: "88%", color: "blue", drift: "c", speed: "12s", delay: "-2s" },
  { left: "3%", top: "31%", color: "blue", drift: "c", speed: "11s", delay: "-6s" },
  { left: "14%", top: "52%", color: "blue", drift: "a", speed: "14s", delay: "-11s" },
  { left: "22%", top: "7%", color: "red", drift: "b", speed: "9s", delay: "-3s" },
  { left: "28%", top: "71%", color: "blue", drift: "a", speed: "10s", delay: "-8s" },
  { left: "35%", top: "44%", color: "blue", drift: "c", speed: "13s", delay: "-5s" },
  { left: "46%", top: "9%", color: "red", drift: "a", speed: "12s", delay: "-7s" },
  { left: "52%", top: "49%", color: "blue", drift: "b", speed: "9s", delay: "-4s" },
  { left: "58%", top: "91%", color: "blue", drift: "c", speed: "15s", delay: "-12s" },
  { left: "65%", top: "6%", color: "blue", drift: "a", speed: "10s", delay: "-2s" },
  { left: "72%", top: "53%", color: "red", drift: "c", speed: "11s", delay: "-9s" },
  { left: "79%", top: "27%", color: "blue", drift: "b", speed: "13s", delay: "-6s" },
  { left: "85%", top: "93%", color: "blue", drift: "a", speed: "9s", delay: "-1s" },
  { left: "91%", top: "18%", color: "red", drift: "b", speed: "12s", delay: "-8s" },
  { left: "6%", top: "92%", color: "blue", drift: "c", speed: "14s", delay: "-10s" },
  { left: "44%", top: "88%", color: "red", drift: "a", speed: "10s", delay: "-5s" },
  { left: "98%", top: "57%", color: "blue", drift: "b", speed: "13s", delay: "-7s" },
]

type SwarmStyle = CSSProperties & {
  "--swarm-speed": string
  "--swarm-delay": string
  "--swarm-funnel-y": string
  "--swarm-funnel-mid-y": string
}

export function SwarmBackground() {
  return (
    <div className="swarm-field" aria-hidden="true">
      {particles.map((particle, index) => {
        const startingY = Number.parseFloat(particle.top)
        const funnelOffset = `${(50 - startingY) * 0.6}vh`
        const funnelMidOffset = `${(50 - startingY) * 0.27}vh`

        return (
          <span
            key={`swarm-${index}`}
            className={`swarm-particle swarm-particle-${particle.color}`}
            style={
              {
                left: "-6vw",
                top: particle.top,
                "--swarm-speed": particle.speed,
                "--swarm-delay": particle.delay,
                "--swarm-funnel-y": funnelOffset,
                "--swarm-funnel-mid-y": funnelMidOffset,
                animationDelay: `${particle.delay}, ${-index * 0.17}s`,
              } as SwarmStyle
            }
          />
        )
      })}
    </div>
  )
}
