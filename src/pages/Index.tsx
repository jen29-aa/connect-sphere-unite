
import { useState } from "react";
import { Link } from "react-router-dom";
import { MainLayout } from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SkillCard } from "@/components/skills/SkillCard";
import { EventCard } from "@/components/events/EventCard";
import { ChallengeCard } from "@/components/challenges/ChallengeCard";
import { mockSkills, mockUsers, mockEvents, mockChallenges } from "@/data/mockData";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  
  // Get featured skills, events, and challenges
  const featuredSkills = mockSkills.slice(0, 4);
  const featuredEvents = mockEvents.slice(0, 2);
  const featuredChallenges = mockChallenges.slice(0, 2);
  
  // Helper to find the user for a given skill
  const findUserForSkill = (userId: string) => {
    return mockUsers.find(user => user.id === userId) || mockUsers[0];
  };
  
  // Helper to find the organizer for an event
  const findOrganizerForEvent = (organizerId: string) => {
    return mockUsers.find(user => user.id === organizerId) || mockUsers[0];
  };

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-secondary via-background to-secondary">
        <div className="container px-4 md:px-6 flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
              Connect, Share, Grow <span className="text-primary">Together</span>
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
              Join your local community of skill-sharers and build meaningful connections by sharing what you know and learning what you don't.
            </p>
          </div>
          <div className="w-full max-w-sm space-y-2">
            <div className="relative">
              <Input
                placeholder="What would you like to learn or teach?"
                className="pr-8"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Button className="absolute right-0 top-0 h-full rounded-l-none">
                Search
              </Button>
            </div>
          </div>
          <div className="flex flex-wrap gap-2 justify-center">
            <Link to="/skills">
              <Button variant="default">Find Skills</Button>
            </Link>
            <Link to="/profile">
              <Button variant="outline">Share Your Skills</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Skills Section */}
      <section className="w-full py-12 md:py-16">
        <div className="container px-4 md:px-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold tracking-tight">Featured Skills</h2>
              <p className="text-muted-foreground">Discover what your community has to share</p>
            </div>
            <Link to="/skills">
              <Button variant="ghost">View All Skills</Button>
            </Link>
          </div>
          <div className="grid gap-6 mt-6 md:grid-cols-2 lg:grid-cols-4">
            {featuredSkills.map((skill) => (
              <SkillCard 
                key={skill.id} 
                skill={skill} 
                user={findUserForSkill(skill.userId)} 
              />
            ))}
          </div>
        </div>
      </section>

      {/* Community Challenges Section */}
      <section className="w-full py-12 md:py-16 bg-accent/30">
        <div className="container px-4 md:px-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold tracking-tight">Community Challenges</h2>
              <p className="text-muted-foreground">Join a challenge and make an impact together</p>
            </div>
            <Link to="/challenges">
              <Button variant="ghost">View All Challenges</Button>
            </Link>
          </div>
          <div className="grid gap-6 mt-6 md:grid-cols-2">
            {featuredChallenges.map((challenge) => (
              <ChallengeCard key={challenge.id} challenge={challenge} />
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="w-full py-12 md:py-16">
        <div className="container px-4 md:px-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold tracking-tight">Upcoming Events</h2>
              <p className="text-muted-foreground">Meet your neighbors and learn together</p>
            </div>
            <Link to="/events">
              <Button variant="ghost">View All Events</Button>
            </Link>
          </div>
          <div className="grid gap-6 mt-6 md:grid-cols-2">
            {featuredEvents.map((event) => (
              <EventCard 
                key={event.id} 
                event={event} 
                organizer={findOrganizerForEvent(event.organizerId)} 
              />
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-secondary/30">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2 max-w-[800px]">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">How ConnectSphere Works</h2>
              <p className="text-muted-foreground text-xl">
                Building community connections through skill sharing has never been easier
              </p>
            </div>
            <div className="grid gap-8 mt-8 md:grid-cols-3">
              <div className="flex flex-col items-center space-y-2 border rounded-lg p-6 bg-background">
                <div className="p-3 rounded-full bg-primary/10 text-primary">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">List Your Skills</h3>
                <p className="text-muted-foreground text-center">
                  Share what you're good at, whether it's teaching, making, or helping
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 border rounded-lg p-6 bg-background">
                <div className="p-3 rounded-full bg-primary/10 text-primary">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 16l2.879-2.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242zM21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Find Local Matches</h3>
                <p className="text-muted-foreground text-center">
                  Discover neighbors with the skills you need or who need your skills
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 border rounded-lg p-6 bg-background">
                <div className="p-3 rounded-full bg-primary/10 text-primary">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Connect & Exchange</h3>
                <p className="text-muted-foreground text-center">
                  Trade skills, teach, learn, or pay for services with people you can trust
                </p>
              </div>
            </div>
            <Link to="/about">
              <Button variant="outline" className="mt-4">Learn More</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Join Our Community Section */}
      <section className="w-full py-12 md:py-24 bg-primary text-primary-foreground">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tight">Join Our Community Today</h2>
              <p className="text-xl">
                Start sharing your skills, connecting with neighbors, and building a stronger community.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link to="/register">
                  <Button variant="secondary" className="bg-white text-primary hover:bg-gray-100">
                    Sign Up Now
                  </Button>
                </Link>
                <Link to="/about">
                  <Button variant="outline" className="border-white text-white hover:bg-primary-foreground hover:text-primary">
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="grid grid-cols-2 gap-4">
                <img
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
                  alt="Person sharing skills"
                  className="rounded-lg shadow-lg aspect-[4/3] object-cover"
                />
                <img
                  src="https://images.unsplash.com/photo-1519389950473-47ba0277781c"
                  alt="Community skill sharing"
                  className="rounded-lg shadow-lg aspect-[4/3] object-cover"
                />
                <img
                  src="https://images.unsplash.com/photo-1581092795360-fd1ca04f0952"
                  alt="Teaching a skill"
                  className="rounded-lg shadow-lg aspect-[4/3] object-cover"
                />
                <img
                  src="https://images.unsplash.com/photo-1721322800607-8c38375eef04"
                  alt="Community connection"
                  className="rounded-lg shadow-lg aspect-[4/3] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Index;
