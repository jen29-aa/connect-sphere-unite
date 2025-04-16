
import React from "react";
import { Link } from "react-router-dom";
import { Calendar, Award, Users } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Challenge } from "@/types";

interface ChallengeCardProps {
  challenge: Challenge;
}

export function ChallengeCard({ challenge }: ChallengeCardProps) {
  // Calculate days remaining
  const startDate = new Date(challenge.startDate);
  const endDate = new Date(challenge.endDate);
  const today = new Date();
  const totalDays = (endDate.getTime() - startDate.getTime()) / (1000 * 3600 * 24);
  const daysElapsed = (today.getTime() - startDate.getTime()) / (1000 * 3600 * 24);
  const daysRemaining = Math.max(0, Math.ceil((endDate.getTime() - today.getTime()) / (1000 * 3600 * 24)));
  const progress = Math.min(100, Math.max(0, (daysElapsed / totalDays) * 100));
  
  const isActive = today >= startDate && today <= endDate;
  const isUpcoming = today < startDate;
  const isCompleted = today > endDate;
  
  return (
    <Card className="overflow-hidden transition-all hover:shadow-md">
      <CardHeader className="p-4">
        <div className="flex justify-between items-start">
          <Link to={`/challenges/${challenge.id}`}>
            <h3 className="font-semibold text-lg hover:text-primary transition-colors">
              {challenge.title}
            </h3>
          </Link>
          {isActive && <Badge className="bg-green-500">Active</Badge>}
          {isUpcoming && <Badge className="bg-blue-500">Upcoming</Badge>}
          {isCompleted && <Badge variant="outline">Completed</Badge>}
        </div>
        <div className="flex items-center gap-2 text-sm text-muted-foreground mt-2">
          <Calendar className="h-3.5 w-3.5" />
          <span>
            {new Date(challenge.startDate).toLocaleDateString()} - {new Date(challenge.endDate).toLocaleDateString()}
          </span>
        </div>
      </CardHeader>
      <CardContent className="p-4 pt-0">
        <p className="text-sm text-muted-foreground mb-4">
          {challenge.description}
        </p>
        
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span>Progress</span>
            <span>{isActive ? `${daysRemaining} days left` : isUpcoming ? 'Starting soon' : 'Completed'}</span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>
        
        <div className="mt-4 flex items-center gap-2 text-sm">
          <Users className="h-4 w-4 text-muted-foreground" />
          <span className="text-muted-foreground">{challenge.participantsCount} participants</span>
        </div>
        
        {challenge.rewards && (
          <div className="mt-2 flex items-start gap-2 text-sm">
            <Award className="h-4 w-4 text-amber-500 mt-0.5" />
            <span className="text-muted-foreground">{challenge.rewards}</span>
          </div>
        )}
      </CardContent>
      <CardFooter className="p-4 pt-2">
        <Button className="w-full" disabled={isCompleted}>
          {isActive ? 'Join Challenge' : isUpcoming ? 'Get Notified' : 'View Results'}
        </Button>
      </CardFooter>
    </Card>
  );
}
