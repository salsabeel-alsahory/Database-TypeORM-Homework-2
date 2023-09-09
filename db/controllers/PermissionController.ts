
import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { Permission } from '../entities/Permission';

class PermissionController {
  async createPermission(req: Request, res: Response) {
    try {
      const permissionRepository = getRepository(Permission);
      const newPermission = permissionRepository.create(req.body);
      await permissionRepository.save(newPermission);
      return res.status(201).json(newPermission);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Failed to create permission' });
    }
  }

  // Add other methods for updating, deleting, and listing permissions as needed
}

export default new PermissionController();