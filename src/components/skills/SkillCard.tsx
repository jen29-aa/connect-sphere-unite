
import React from "react";
import { Link } from "react-router-dom";
import { MapPin, Clock, Repeat, DollarSign } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Skill, User } from "@/types";

interface SkillCardProps {
  skill: Skill;
  user: User;
}

export function SkillCard({ skill, user }: SkillCardProps) {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-md">
      <div className="aspect-[16/9] overflow-hidden">
        <img
          src={skill.imageUrl || "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"}
          alt={skill.title}
          className="h-full w-full object-cover transition-transform hover:scale-105"
        />
      </div>
      <CardHeader className="p-4">
        <div className="flex justify-between items-start">
          <Link to={`/skills/${skill.id}`}>
            <h3 className="font-semibold text-lg hover:text-primary transition-colors line-clamp-2">
              {skill.title}
            </h3>
          </Link>
          <Badge variant={skill.type === "offer" ? "default" : "secondary"}>
            {skill.type === "offer" ? "Offering" : "Requesting"}
          </Badge>
        </div>
        <div className="flex items-center gap-2 text-sm text-muted-foreground mt-2">
          <MapPin className="h-3.5 w-3.5" />
          <span>{skill.location.city}</span>
        </div>
      </CardHeader>
      <CardContent className="p-4 pt-0">
        <p className="text-sm text-muted-foreground line-clamp-3 mb-3">
          {skill.description}
        </p>
        <div className="flex flex-wrap gap-1 my-2">
          <Badge variant="outline">{skill.category}</Badge>
          {skill.exchangeType === "barter" && (
            <Badge variant="outline" className="flex items-center gap-0.5">
              <Repeat className="h-3 w-3 mr-0.5" />
              Barter
            </Badge>
          )}
          {skill.exchangeType === "payment" && (
            <Badge variant="outline" className="flex items-center gap-0.5">
              <DollarSign className="h-3 w-3 mr-0.5" />
              Payment
            </Badge>
          )}
          {skill.exchangeType === "both" && (
            <Badge variant="outline" className="flex items-center gap-0.5">
              <DollarSign className="h-3 w-3 mr-0.5" />
              <Repeat className="h-3 w-3" />
              Both
            </Badge>
          )}
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Avatar className="h-8 w-8">
            <AvatarImage src={user.profileImageUrl} alt={user.name} />
            <AvatarFallback>{user.name[0]}</AvatarFallback>
          </Avatar>
          <div className="text-sm">
            <p className="font-medium">{user.name}</p>
            <div className="flex items-center gap-1">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className={`text-xs ${i < Math.floor(user.rating) ? 'text-amber-500' : 'text-muted-foreground'}`}>
                    ★
                  </span>
                ))}
              </div>
              <span className="text-xs text-muted-foreground">({user.reviewCount})</span>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-1 text-xs text-muted-foreground">
          <Clock className="h-3 w-3" />
          <span>
            {new Date(skill.createdAt).toLocaleDateString(undefined, {
              month: "short",
              day: "numeric"
            })}
          </span>
        </div>
      </CardFooter>
      <CardFooter className="p-4 pt-0">
        <Button className="w-full" variant="default">
          Connect
        </Button>
      </CardFooter>
    </Card>
  );
}
