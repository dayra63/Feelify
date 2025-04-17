"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"
import Link from "next/link"
import { Instagram, AirplayIcon as Spotify, Youtube } from "lucide-react"

// Mood types and their associated colors
const moods = [
  {
    emoji: "😄",
    name: "Happy",
    color: "bg-yellow-100 dark:bg-yellow-900",
    hoverColor: "hover:bg-yellow-200 dark:hover:bg-yellow-800",
    textColor: "text-yellow-600 dark:text-yellow-300",
    bgGradient: "from-yellow-200 to-orange-100 dark:from-yellow-900 dark:to-orange-900",
  },
  {
    emoji: "😢",
    name: "Sad",
    color: "bg-blue-100 dark:bg-blue-900",
    hoverColor: "hover:bg-blue-200 dark:hover:bg-blue-800",
    textColor: "text-blue-600 dark:text-blue-300",
    bgGradient: "from-blue-200 to-indigo-100 dark:from-blue-900 dark:to-indigo-900",
  },
  {
    emoji: "😌",
    name: "Chill",
    color: "bg-green-100 dark:bg-green-900",
    hoverColor: "hover:bg-green-200 dark:hover:bg-green-800",
    textColor: "text-green-600 dark:text-green-300",
    bgGradient: "from-green-200 to-teal-100 dark:from-green-900 dark:to-teal-900",
  },
  {
    emoji: "😠",
    name: "Angry",
    color: "bg-red-100 dark:bg-red-900",
    hoverColor: "hover:bg-red-200 dark:hover:bg-red-800",
    textColor: "text-red-600 dark:text-red-300",
    bgGradient: "from-red-200 to-rose-100 dark:from-red-900 dark:to-rose-900",
  },
  {
    emoji: "⚡",
    name: "Energetic",
    color: "bg-purple-100 dark:bg-purple-900",
    hoverColor: "hover:bg-purple-200 dark:hover:bg-purple-800",
    textColor: "text-purple-600 dark:text-purple-300",
    bgGradient: "from-purple-200 to-fuchsia-100 dark:from-purple-900 dark:to-fuchsia-900",
  },
  {
    emoji: "❤️",
    name: "In Love",
    color: "bg-pink-100 dark:bg-pink-900",
    hoverColor: "hover:bg-pink-200 dark:hover:bg-pink-800",
    textColor: "text-pink-600 dark:text-pink-300",
    bgGradient: "from-pink-200 to-rose-100 dark:from-pink-900 dark:to-rose-900",
  },
]

// Sample playlists for each mood
const playlists = {
  Happy: {
    title: "Upbeat Vibes",
    description: "Energetic tunes to keep your spirits high and your feet moving.",
    embedUrl: "https://open.spotify.com/embed/playlist/37i9dQZF1DX3rxVfibe1L0",
  },
  Sad: {
    title: "Melancholy Melodies",
    description: "Soft tunes to embrace your feelings and find comfort in the blues.",
    embedUrl: "https://open.spotify.com/embed/playlist/37i9dQZF1DX7qK8ma5wgG1",
  },
  Chill: {
    title: "Relaxation Station",
    description: "Calm beats to help you unwind and find your zen.",
    embedUrl: "https://open.spotify.com/embed/playlist/37i9dQZF1DX0MLFaUdXnjA",
  },
  Angry: {
    title: "Rage Release",
    description: "Powerful tracks to channel your frustration and find catharsis.",
    embedUrl: "https://open.spotify.com/embed/playlist/37i9dQZF1DX4eRPd9frC1m",
  },
  Energetic: {
    title: "Power Boost",
    description: "High-tempo beats to fuel your workout or power through your day.",
    embedUrl: "https://open.spotify.com/embed/playlist/37i9dQZF1DX76Wlfdnj7AP",
  },
  "In Love": {
    title: "Romantic Rhythms",
    description: "Sweet serenades to celebrate love and connection.",
    embedUrl: "https://open.spotify.com/embed/playlist/37i9dQZF1DX7rOY2tZUw1k",
  },
}

export default function Home() {
  const [selectedMood, setSelectedMood] = useState<string | null>(null)

  const handleMoodSelect = (mood: string) => {
    setSelectedMood(mood)
    // Scroll to playlist section when mood is selected
    setTimeout(() => {
      document.getElementById("playlist-section")?.scrollIntoView({ behavior: "smooth" })
    }, 300)
  }

  const resetMood = () => {
    setSelectedMood(null)
    // Scroll back to mood selection
    setTimeout(() => {
      document.getElementById("mood-selection")?.scrollIntoView({ behavior: "smooth" })
    }, 300)
  }

  // Find the selected mood object
  const currentMood = moods.find((mood) => mood.name === selectedMood)

  return (
    <div
      className={`min-h-screen transition-colors duration-500 ${selectedMood ? `bg-gradient-to-br ${currentMood?.bgGradient}` : "bg-background"}`}
    >
      {/* Header */}
      <header className="sticky top-0 z-10 backdrop-blur-md bg-background/80 dark:bg-background/80 border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
              Mood to Music
            </span>
          </Link>

          <div className="flex items-center space-x-6">
            <nav className="hidden md:flex space-x-6">
              <Link href="/" className="text-sm font-medium hover:text-primary transition-colors">
                Home
              </Link>
              <Link href="#about" className="text-sm font-medium hover:text-primary transition-colors">
                About
              </Link>
              <Link href="#contact" className="text-sm font-medium hover:text-primary transition-colors">
                Contact
              </Link>
            </nav>
            <ModeToggle />
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="py-12 md:py-20 text-center" id="mood-selection">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">What&apos;s Your Mood Today?</h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Discover the perfect music for your current mood.
          </p>

          {/* Mood Selection Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
            {moods.map((mood) => (
              <button
                key={mood.name}
                onClick={() => handleMoodSelect(mood.name)}
                className={`p-6 rounded-xl ${mood.color} ${mood.hoverColor} ${mood.textColor} transition-all duration-300 transform hover:scale-105 flex flex-col items-center`}
              >
                <span className="text-4xl mb-2">{mood.emoji}</span>
                <span className="font-medium">{mood.name}</span>
              </button>
            ))}
          </div>
        </section>

        {/* Playlist Section */}
        <section
          id="playlist-section"
          className={`py-12 transition-opacity duration-500 ${selectedMood ? "opacity-100" : "opacity-0 h-0 overflow-hidden"}`}
        >
          {selectedMood && (
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold mb-2">Your Playlist</h2>
                <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary mb-4">
                  {currentMood?.emoji} {selectedMood} Mood
                </div>
                <p className="text-muted-foreground max-w-xl mx-auto">
                  {playlists[selectedMood as keyof typeof playlists].description}
                </p>
              </div>

              <div className="bg-card rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-semibold mb-4">
                  {playlists[selectedMood as keyof typeof playlists].title}
                </h3>
                <div className="aspect-video bg-muted rounded-lg overflow-hidden mb-6">
                  <iframe
                    src={playlists[selectedMood as keyof typeof playlists].embedUrl}
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    allow="encrypted-media"
                    className="w-full h-full"
                  ></iframe>
                </div>
                <div className="flex justify-center">
                  <Button onClick={resetMood} variant="outline" size="lg">
                    Explore Another Mood
                  </Button>
                </div>
              </div>
            </div>
          )}
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t mt-12">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-sm text-muted-foreground">
                © {new Date().getFullYear()} Mood to Music. All rights reserved.
              </p>
            </div>

            <div className="flex space-x-6 mb-4 md:mb-0">
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Spotify className="h-5 w-5" />
                <span className="sr-only">Spotify</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Youtube className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
            </div>

            <div className="flex space-x-4 text-sm">
              <Link href="#about" className="text-muted-foreground hover:text-primary transition-colors">
                About
              </Link>
              <Link href="#privacy" className="text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link href="#contact" className="text-muted-foreground hover:text-primary transition-colors">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
