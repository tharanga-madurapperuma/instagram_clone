package com.example.backend.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.Transient;
import org.springframework.data.mongodb.core.mapping.Document;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Document
public class Post {

    @Transient
    public static final String SEQUENCE_NAME="post_sequence";

    @Id
    private String postId;

    private String userId;
    private String[] commentId;

    public String imageUrl;
    public String description;
    public int likeCount;
}
