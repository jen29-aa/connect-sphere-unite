
import { useState, useEffect } from "react";
import { MainLayout } from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { SkillCard } from "@/components/skills/SkillCard";
import { mockSkills, mockUsers } from "@/data/mockData";
import { Skill, SkillCategory } from "@/types";
import { Filter, Search } from "lucide-react";

const Skills = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState<SkillCategory | "all">("all");
  const [exchangeFilter, setExchangeFilter] = useState<"all" | "barter" | "payment" | "both">("all");
  const [filteredSkills, setFilteredSkills] = useState<Skill[]>(mockSkills);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  // Helper to find the user for a given skill
  const findUserForSkill = (userId: string) => {
    return mockUsers.find(user => user.id === userId) || mockUsers[0];
  };

  // Filter skills based on search and filters
  useEffect(() => {
    let result = [...mockSkills];
    
    // Apply search query filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        skill => 
          skill.title.toLowerCase().includes(query) || 
          skill.description.toLowerCase().includes(query) ||
          skill.category.toLowerCase().includes(query)
      );
    }
    
    // Apply category filter
    if (categoryFilter !== "all") {
      result = result.filter(skill => skill.category === categoryFilter);
    }
    
    // Apply exchange type filter
    if (exchangeFilter !== "all") {
      result = result.filter(skill => skill.exchangeType === exchangeFilter);
    }
    
    setFilteredSkills(result);
  }, [searchQuery, categoryFilter, exchangeFilter]);

  return (
    <MainLayout>
      <div className="container py-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold">Skills Marketplace</h1>
            <p className="text-muted-foreground">
              Discover and connect with local skills in your community
            </p>
          </div>
          <Button variant="default">Share Your Skills</Button>
        </div>
        
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          {/* Search */}
          <div className="relative flex-1">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search for skills..."
              className="pl-8"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          
          {/* Filters toggle for mobile */}
          <div className="md:hidden">
            <Button 
              variant="outline" 
              className="w-full flex items-center gap-2"
              onClick={() => setIsFilterOpen(!isFilterOpen)}
            >
              <Filter className="h-4 w-4" />
              Filters
            </Button>
          </div>
          
          {/* Desktop filters */}
          <div className="hidden md:flex items-center gap-2">
            <Select
              value={categoryFilter}
              onValueChange={(value) => setCategoryFilter(value as SkillCategory | "all")}
            >
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                <SelectItem value="teaching">Teaching</SelectItem>
                <SelectItem value="crafts">Crafts</SelectItem>
                <SelectItem value="technology">Technology</SelectItem>
                <SelectItem value="wellness">Wellness</SelectItem>
                <SelectItem value="home">Home</SelectItem>
                <SelectItem value="language">Language</SelectItem>
                <SelectItem value="creative">Creative</SelectItem>
                <SelectItem value="professional">Professional</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
            <Select
              value={exchangeFilter}
              onValueChange={(value) => setExchangeFilter(value as "all" | "barter" | "payment" | "both")}
            >
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Exchange Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Types</SelectItem>
                <SelectItem value="barter">Barter Only</SelectItem>
                <SelectItem value="payment">Payment Only</SelectItem>
                <SelectItem value="both">Barter & Payment</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        
        {/* Mobile filters */}
        {isFilterOpen && (
          <div className="md:hidden flex flex-col gap-2 p-4 mb-4 border rounded-md bg-card">
            <Select
              value={categoryFilter}
              onValueChange={(value) => setCategoryFilter(value as SkillCategory | "all")}
            >
              <SelectTrigger>
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                <SelectItem value="teaching">Teaching</SelectItem>
                <SelectItem value="crafts">Crafts</SelectItem>
                <SelectItem value="technology">Technology</SelectItem>
                <SelectItem value="wellness">Wellness</SelectItem>
                <SelectItem value="home">Home</SelectItem>
                <SelectItem value="language">Language</SelectItem>
                <SelectItem value="creative">Creative</SelectItem>
                <SelectItem value="professional">Professional</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
            <Select
              value={exchangeFilter}
              onValueChange={(value) => setExchangeFilter(value as "all" | "barter" | "payment" | "both")}
            >
              <SelectTrigger>
                <SelectValue placeholder="Exchange Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Types</SelectItem>
                <SelectItem value="barter">Barter Only</SelectItem>
                <SelectItem value="payment">Payment Only</SelectItem>
                <SelectItem value="both">Barter & Payment</SelectItem>
              </SelectContent>
            </Select>
          </div>
        )}
        
        {/* Skills Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredSkills.length > 0 ? (
            filteredSkills.map((skill) => (
              <SkillCard 
                key={skill.id} 
                skill={skill} 
                user={findUserForSkill(skill.userId)} 
              />
            ))
          ) : (
            <div className="col-span-full flex flex-col items-center justify-center py-12 text-center">
              <div className="rounded-full bg-secondary p-4">
                <Search className="h-8 w-8 text-muted-foreground" />
              </div>
              <h2 className="mt-4 text-xl font-semibold">No skills found</h2>
              <p className="text-muted-foreground">
                Try adjusting your search or filters to find what you're looking for.
              </p>
            </div>
          )}
        </div>
      </div>
    </MainLayout>
  );
};

export default Skills;
