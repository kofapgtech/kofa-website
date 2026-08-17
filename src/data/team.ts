import { TeamMember } from '../types';

/**
 * Selected team profiles.
 *
 * Intentionally empty: the source documents attribute every case study to an
 * anonymous "Team member", so there are no names, titles or bios to draw on and
 * inventing them would put fabricated people on a live site. The section is
 * built and renders as soon as this array is populated.
 *
 * For each person add:
 *   id      — url-safe slug, e.g. 'jane-doe'
 *   name    — display name
 *   title   — role at Kofa P/G, e.g. 'Policy & Coalitions Strategist'
 *   role    — 'builder' | 'architect' | 'planner' (their place in the triad)
 *   bio     — one or two sentences
 *
 * Example:
 *   {
 *     id: 'jane-doe',
 *     name: 'Jane Doe',
 *     title: 'Director of Restorative Programs',
 *     role: 'planner',
 *     bio: 'Two decades navigating municipal policy for community-owned development.',
 *   },
 */
export const teamMembers: TeamMember[] = [];
