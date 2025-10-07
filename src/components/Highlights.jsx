import React from 'react'

export default function Highlights() {
  const highlights = [
    {
      title: "Novel Architectures",
      description: "Engineered CNNs, Transformers, and GNNs with generative designs across language, vision, and molecular data – building architectures that learn and evolve with precision."
    },
    {
      title: "Vision & Purpose",
      description: "Guided by the mission to connect consciousness and computation, creating AI that interprets not just data, but intent, emotion, and meaning."
    },
    {
      title: "Researcher",
      description: "Authored and co-authored 4 research papers exploring deep learning, graph-based molecular generation, and AI cognition – bridging academia with innovation."
    },
    {
      title: "Real-World Problem Solver",
      description: "Each project – from Chetona to Women Safety AI – addresses real human challenges, proving that intelligence must serve purpose before perfection."
    }
  ]

  return (
    <section id="highlights" className="mt-4">
      <h2 className="section-title">Highlights</h2>
      <div className="highlights d-flex flex-column gap-3">
        {highlights.map((h, i) => (
          <div key={i} className="highlight-card">
            <h5 className="text-primary mb-2">{h.title}</h5>
            <p className="mb-0 text-white text-xl">{h.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
