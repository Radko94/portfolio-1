﻿using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using PPavlov.Portfolio.DAL.Contracts;

namespace PPavlov.Portfolio.DAL.Entities
{
    public class ProjectDetailImage: IEntity<int>
    {
        [Key]
        public int Id { get; set; }

        public int ProjectDetailId { get; set; }

        public int ProjectImageId { get; set; }

        [ForeignKey(nameof(ProjectDetailId))]
        public virtual ProjectDetail ProjectDetail { get; set; }

        [ForeignKey(nameof(ProjectImageId))]
        public virtual Image Image { get; set; }
    }
}
