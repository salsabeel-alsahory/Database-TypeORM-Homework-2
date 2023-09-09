
import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { Role } from '../entities/Role';

class RoleController {
  async createRole(req: Request, res: Response) {
    try {
      const roleRepository = getRepository(Role);
      const newRole = roleRepository.create(req.body);
      await roleRepository.save(newRole);
      return res.status(201).json(newRole);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Failed to create role' });
    }
  }

  // Add other methods for updating, deleting, and listing roles as needed
}

export default new RoleController();
